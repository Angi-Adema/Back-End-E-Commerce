// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',  //How do I know when to have an onDelete clause and when not to?
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',  //This one may not have the onDelete clause since it would be rare to eliminate a category?
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: ProductTag,
  foreignKey: 'product_id',
  //Do we need an onDelete or other option?
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
