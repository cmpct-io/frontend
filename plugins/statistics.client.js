import { Connection, Counter, HitCounter } from 'micro-stat'

export default function (context, inject) {
  Connection.connect('https://micro-stat-functions.azurewebsites.net/api/ingest?dsn=d9d71703-023b-4849-8e15-73404277e854')

  const statistics = {
    Counter,
    HitCounter
  }

  const myCounter = new HitCounter('CMPCT Loaded')
  myCounter.publish()

  inject('statistics', statistics)
}
