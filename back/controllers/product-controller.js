const db = require('../models/db')
const multer = require('multer');

exports.getAllUserProducts = async (req, res, next) => {
  try {
    const products = await db.product.findMany();
    res.json({ products });
  } catch (err) {
    next(err);
  }
};

exports.getByUser = async (req, res, next) => {
  try {
    const products = await db.product.findMany({
      where : { userId : req.user.id}
    })
    res.json({products})
  } catch (err) {
    next(err)
  }

}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage }).single('image');

exports.createProduct = async(req,res,next)=>{
  //validation req.body
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    const { title, detail, price } = req.body;
    const imageUrl = req.file ? req.file.filename : null;
    try{
      const rs = await db.product.create({
        data: {
          title: title,
          detail: detail,
          price: parseInt(price),
          imageUrl: imageUrl,
          userId: req.user.id,
        }
      });
      res.json({ msg: 'Create Success', result: rs })
      console.log(imageUrl)
    } catch(err) {
      next(err)
    }
  })
}

exports.updateProduct = async (req, res, next) => {
  //validation req.body
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    
    const { id } = req.params;
    const { title, detail, price } = req.body;
    const imageUrl = req.file ? req.file.filename : null;

    try {
      const updateData = {
        title: title,
        detail: detail,
        price: parseInt(price),
      };

      if (imageUrl) {
        updateData.imageUrl = imageUrl;
      }

      const rs = await db.product.update({
        where: { id: +id, userId: req.user.id },
        data: updateData,
      });

      res.json({ msg: 'Update Success', result: rs });
    } catch(err) {
      next(err);
    }
  });
};

exports.deleteProduct = async (req,res,next)=>{
  const {id} = req.params
  try{
    const rs = await db.product.delete({where:{id : +id, userId: req.user.id}})
    res.json({msg: 'Delete Succes',result:rs})
  }catch(err){
    next(err)
  }
}