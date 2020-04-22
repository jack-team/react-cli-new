import './c.scss';

interface BB {
    b:string
}

const a:BB = {
    b:`1`
}

const {
    b
} = a;

console.log(b)