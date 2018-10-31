import { Mongo } from 'meteor/mongo';


export let Requests = new Mongo.Collection('requests');

export let Orders = new Mongo.Collection('orders');

export let Ratings = new Mongo.Collection('ratings');

export let Customers = new Mongo.Collection('customers');