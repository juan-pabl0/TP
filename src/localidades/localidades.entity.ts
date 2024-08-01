import { Db, ObjectId } from 'mongodb';
import crypto from 'node:crypto';


export class Localidad{
    constructor(
        public nombre_localidad: string,
        public id ?: Number
    ) {}
}