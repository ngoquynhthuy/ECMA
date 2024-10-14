const loadScript = function(src, callback) {
    //<script src="src"></script>
    const script = document.createElement('script')
    script.src = src
    script.onload = function() {
        callback()
    }
    script.onerror = function() {
        const error = new Error("Lỗi rồi anh ơi!!!")
        callback(error)
    }
    document.head.append(script)
}
// setTimeout
loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.211/lodash.min.js', function(error) {
    if(error) {
        console.log(error);
    } else {
        // console.log
        console.log(_.uniq([1,2,3,2,4,3]));
    }
})