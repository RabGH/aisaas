import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const response = await openai.jukebox.completions.create({
  model: "jukebox",
  genre: "rock",
  artist: "Queen",
  lyrics: "We are the champions, my friends"
});

const fs = require("fs");
fs.writeFileSync("sample.mp3", response.audio);
