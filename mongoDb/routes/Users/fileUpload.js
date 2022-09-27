const express = require("express");
const formidable = require("formidable");
const router = express.Router();
const path = require("path");

router.post("/uploadFile", async (req, res) => {
  try {
    // if (!req.body) return;
    // const {picture} = req.body;
    // const uploadFolder = path.join(__dirname, "../../uploads");
    let form = new formidable.IncomingForm({
      multiples: true,
      keepExtensions: true,
      uploadDir: "./mongoDb/uploads",
      maxFileSize: 50 * 1024 * 1024, // 50MB
    });

    // form.uploadDir = uploadFolder;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.json({ msg: "error", err });
      }

      let arrayOfFiles = files[""];

      // check if multiple files uploaded or single
      if (arrayOfFiles.length) {
        let fileNames = [];
        // console.log(arrayOfFiles[0].newFilename);
        arrayOfFiles.forEach((eachFile) => {
          fileNames.push(eachFile.newFilename);
        });

        res.json({ msg: "Uploaded multiple file", fileNames });
      } else {
        res.json({
          msg: "Uploaded single file",
          fileNames: files[""].newFilename,
        });
      }
    });
  } catch (error) {
    console.log(error.name);
    res.send("Error occured").status(500);
  }
});

module.exports = router;
