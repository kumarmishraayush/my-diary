const express = require("express");
const router = express.Router();

const fetchuser = require("../middleware/fetchuser");

const Diary = require("../models/Diary");
const { body, validationResult } = require("express-validator");
router.get("/fetchDiary", fetchuser, async (req, res) => {
  try {
    const diary = await Diary.find({ user: req.user.id });
    res.json(diary);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post(
  "/adddiary",
  fetchuser,
  [
    body("DayWas", "Enter valid thing").isLength({ min: 2 }),
    body("Descryption", "kuch bada likh le bhai").isLength({ min: 4 }),
  ],
  async (req, res) => {
    try {
      const { DayWas, Descryption } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ express: errors.array() });
      }

      const diary = new Diary({
        DayWas,
        Descryption,
        user: req.user.id,
      });

      const savediary = await diary.save();
      res.json(savediary);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.put("/updateDiary/:id", fetchuser, async (req, res) => {
  const { DayWas, Descryption } = req.body;
  const newDiary = {};
  if (DayWas) {
    newDiary.DayWas = DayWas;
  }

  if (Descryption) {
    newDiary.Descryption = Descryption;
  };


  //find the note to be updated
  let diary = await Diary.findById(req.params.id);
  //const Diary = Diary.findByIdAndUpdate()
  if(!diary){
   return  res.status(404).send('Not Found')
  }
  if(diary.user.toString() !== req.user.id)
  {
    return res.status(401).send("Not Allowed");
  }

  diary = await Diary.findByIdAndUpdate(req.params.id ,{$set :newDiary} , {new : true})
  res.json({diary});
});


router.delete('/deleteDiary/:id', fetchuser, async (req, res) => {
  try {
      // Find the note to be delete and delete it
      let diary = await Diary.findById(req.params.id);
      if (!diary) { return res.status(404).send("Not Found") }

      // Allow deletion only if user owns this Note
      if (diary.user.toString() !== req.user.id) {
          return res.status(401).send("Not Allowed");
      }

      diary = await Diary.findByIdAndDelete(req.params.id)
      res.json({ "Success": "Note has been deleted", diary: diary });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})





module.exports = router;
