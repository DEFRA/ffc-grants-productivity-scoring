require('dotenv').config()
const MIN_GRANT = 20000
const MAX_GRANT = 500000
const GRANT_PERCENTAGE = process.env.GRANT_PERCENTAGE
const GRANT_PERCENTAGE_SOLAR = process.env.GRANT_PERCENTAGE_SOLAR

module.exports = {
    MIN_GRANT,
    MAX_GRANT,
    GRANT_PERCENTAGE,
    GRANT_PERCENTAGE_SOLAR,
}
