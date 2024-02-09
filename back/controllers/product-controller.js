const db = require('../models/db')

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

exports.createProduct = async(req,res,next)=>{
//validation req.body
 const data = {title, detail, price} = req.body
  try{
    const rs = await db.product.create({
      data: {
        title: title,
        detail: detail,
        price: parseInt(price),
        userId: req.user.id
      }
    });
    res.json({ msg: 'Create Succes' , result:rs})
  }catch(err){
    next(err)
  }
}

exports.updateProduct = async(req,res,next)=>{
  //validation req.params + req.body
  const {id} = req.params
  const data = req.body
  try{
    const rs = await db.product.update({
      data:  {...data}, where: {id: +id , userId:req.user.id} 
    })
    res.json({msg : 'Update Succes',result:rs})
  }catch(err){
    next(err)
  }
}

exports.deleteProduct = async (req,res,next)=>{
  const {id} = req.params
  try{
    const rs = await db.product.delete({where:{id : +id, userId: req.user.id}})
    res.json({msg: 'Deleye Succes',result:rs})
  }catch(err){
    next(err)
  }
}