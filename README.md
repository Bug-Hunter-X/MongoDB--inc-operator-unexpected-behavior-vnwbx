# MongoDB $inc operator unexpected behavior

This example demonstrates an uncommon error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numeric field by a specified value. However, if the field is not numeric or does not exist, the update operation might fail silently, leading to unexpected results.

## Bug
The provided code snippet shows incorrect usage of `$inc` that can lead to errors.  The `$inc` operator only works with numeric fields.  If `field` is not a number or doesn't exist the operation will not update the document and return no error.

## Solution
The solution involves checking if the `field` exists and is numeric before using `$inc`.  The example below demonstrates how to use the `$inc` operator safely and efficiently.
