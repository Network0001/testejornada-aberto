utils.js
export default {
   getDistance(obj1, objt2) {
    return Math.sqrt(Math.abs(obj1.x - objt2) ** 2 + Math.abs(obj1.y - objt2.y) ** 2 )
   }
}