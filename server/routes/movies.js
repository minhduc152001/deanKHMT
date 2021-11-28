const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res) => {
  if (req) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//UPDATE
router.put("/:id", verify, async (req, res) => {
  if (req) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateMovie);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie has been deleted!");
    } catch (error) {
      res.status(500).json({ error });
    }
  }
});

//GET
router.get("/find/:id", verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//GET RAMDOM
router.get("/random", async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//GET ALL
router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  if (req) {
    try {
      const movies = query
        ? await Movie.find().sort({ _id: -1 }).limit(9)
        : await Movie.find();
      res.status(200).json(movies.reverse());
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

router.get("/stats", async (req, res) => {
  try {
    const data = await Movie.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]).sort({ _id: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
