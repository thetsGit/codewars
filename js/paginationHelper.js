// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  this.totalItemCount = collection.length;
  this.totalPage =
    Math.floor(this.totalItemCount / this.itemsPerPage) +
    (this.totalItemCount % this.itemsPerPage ? 1 : 0);
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.totalItemCount;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return this.totalPage;
};

// PaginationHelper.prototype.foo = function () {
//   console.log("bar");
//   return "bar";
// };

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  const initialIndex = this.itemsPerPage * pageIndex + 1;
  const endIndex = initialIndex + this.itemsPerPage - 1;
  console.log(initialIndex, endIndex, this.totalItemCount);
  return initialIndex > this.totalItemCount
    ? -1
    : endIndex >= this.totalItemCount
    ? this.totalItemCount - (initialIndex - 1)
    : this.itemsPerPage;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  const implicitPage = Math.floor(itemIndex / this.itemsPerPage);
  return itemIndex + 1 < 0
    ? -1
    : itemIndex + 1 > this.totalItemCount
    ? -1
    : implicitPage;
};
