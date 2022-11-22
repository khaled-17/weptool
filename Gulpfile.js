const { src, dest,series } = require('gulp');
// const cssmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const useref = require('gulp-useref');


var gulps={
    html:"project/*.html",
    css:"project/*.css",
    js:"project/*.js",
    img:"project/*.png"


}



const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
 
function htmlTask() {
    return src(gulps.html)
    .pipe(useref())

    // .pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
    .pipe(dest("dist"))
}

exports.html=htmlTask

function cssTask() {
    return src(gulps.css)
    .pipe(concat("allstyle.min.css"))
    .pipe(cleanCSS())
    .pipe(dest("dist/assets/css"))
}

exports.css=cssTask

//////////////////////////////////////////////////////////////////////////////////////////
function jsTask() {
    return src(gulps.js)
    .pipe(concat("alljs.min.js"))
    .pipe(terser())
    .pipe(dest("dist/assets/js"))
}

exports.js=jsTask
//////////////////////////////////////////////////////////////////////////////////////////
function imgTask() {
    return src(gulps.img)
    .pipe(concat("allimg.png"))
    .pipe(imagemin())
    .pipe(dest("dist/assets/img"))
}

exports.img=imgTask


function test(cb) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    cb()
    console.log("<<,<<<<><><>>");
}



exports.default=series(imgTask,htmlTask,test,jsTask,cssTask)