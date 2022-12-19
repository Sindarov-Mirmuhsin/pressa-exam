import { fetch, fetchAll } from "../../lib/postgres.js"
import {
  GETEVENTS,
  POSTEVENTS,
  PUTEVENTS,
  DELETEEVENTS,
  ACTIVEEVENT
} from "./query.js";


const GET = async ({eventId=0},{status,search,page,limit,sub_id,event_type,user_name,event_date}) => {
    try {
         page = page || 1
         limit =limit || 10
        return await fetchAll(GETEVENTS, [eventId,status,search,(page - 1) * limit,limit,sub_id,event_type,user_name,event_date])
    } catch (error) {
        console.log(error)

    }
}


const POST = async ({ body,description,event_link,event_type,event_date,event_time,user_role,user_name,user_proff,company_name='',phone_number,phone_second,category_id,sub_category_id },image) => {
  try {
    return await fetch(POSTEVENTS, [body,description,event_link,event_type,event_date,event_time,user_role,user_name,user_proff,company_name,phone_number,phone_second,category_id,sub_category_id,image.filename]);
  } catch (error) {
    console.log(error)
    }
};


const PUT = async ({eventId},{ body,description,event_link,event_type,event_date,event_time,user_role,user_name,user_proff,company_name='',phone_number,phone_second,category_id,sub_category_id}) => {
  try {
        return await fetch(PUTEVENTS, [eventId,body,description,event_link,event_type,event_date,event_time,user_role,user_name,user_proff,company_name,phone_number,phone_second,category_id,sub_category_id]);
    }     catch (error) {
        console.log(error)
    }
};

const DELETE = async ({eventId}) => {
  try {
    return await fetch(DELETEEVENTS, [eventId]);
  } catch (error) {
    console.log(error)
    }
};

const PUTACTIVE = async ({eventId}) => {
    try {
      return await fetch(ACTIVEEVENT, [eventId]);
    } catch (error) {
      console.log(error)
      }
  };




export default {
  GET,
  POST,
  PUT,
  DELETE,
  PUTACTIVE
};