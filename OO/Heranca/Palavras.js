let pessoa = {
    nome:"Lucas"
};
console.log(Object.getOwnPropertyDescriptor(pessoa));
Object.assign(pessoa2, pessoa);


let config = {
    ip: '127.0.0.1',
    porta: 8080,
    block: true,
}
let {ip, porta, block} = config;
console.log(ip, porta, block);