require('dotenv').config()
let CronJob = require('cron').CronJob

/**
 * * * * * * * *
  | | | | | |
  | | | | | day of week
  | | | | month
  | | | day of month
  | | hour
  | minute
  second ( optional )

Seconds: 0-59
Minutes: 0-59
Hours: 0-23
Day of Month: 1-31
Months: 0-11 (Jan-Dec)
Day of Week: 0-6 (Sun-Sat)

Asterisk is wild-card

Currently - will run every 14 minutes so onRender does not spin down
'* /14 * * * *',
*/

const healthCronJob = new CronJob(
    '*/14 * * * *',
    async function(){
        console.log("CRON JOB STARTED")
        
        try{
            await fetch(`${process.env.BE_API}/email-form`)
                .then(res => console.log('Health Ping Success:', res))
                .catch(err => console.error('[1] Health Ping Failed:\n', err))
        }
        catch(err){
            console.error('[2] Health Ping Failed:\n', err)
        }

        console.log('CRON JOB END')
    }
)

module.exports = healthCronJob