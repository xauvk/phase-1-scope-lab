var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    let bestCustomer = 'not bob';
}
setBestCustomer()

function overwriteBestCustomer() {
    if (bestCustomer) {
        bestCustomer = 'maybe bob'
    } else {
        let bestCustomer = 'maybe bob'
    }
}

const leastFavoriteCustomer = 'matt'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'connor'
    return leastFavoriteCustomer
}