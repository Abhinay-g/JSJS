function f() {
    console.log("outer", this);

    return () => {
        return this
    }
}
var t = f.bind({
    name: "abhinay"
})

console.log(t()());