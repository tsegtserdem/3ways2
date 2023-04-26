const getUserInfo = () => {
    return new Promise((rs) => {
        setTimeout(() => {
            rs({
                name: 'fatfish'
            })
        }, 2000)
    })
}
// If you want to use await, you must use the async function.
const fetch = async () => {
    const userInfo = await getUserInfo()
    console.log('userInfo 1', userInfo)
}

fetch()
// SyntaxError: await is only valid in async functions
// const userInfo = await getUserInfo()
// console.log('userInfo 2', userInfo)  