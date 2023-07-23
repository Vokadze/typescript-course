const totalPrice = ({ price, discount, isInstallment, months }) => {
    if (isInstallment === true) {
        return (price - (price / 100 * discount)) / months;
    }
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: false, months: 12 });
console.log(price); // 6250
