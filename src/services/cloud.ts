import {createClient, type User} from '@supabase/supabase-js';
import type {Study} from '../core/types';
import {fresh} from './repository';
const url=import.meta.env.VITE_SUPABASE_URL;
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const cloud=url&&key?createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}):null;
export type Account=User;
export async function loadCloud(userId:string):Promise<Study>{
 if(!cloud)throw new Error('Supabase nije konfigurisan.');
 const {data,error}=await cloud.from('study_progress').select('state').eq('user_id',userId).maybeSingle();
 if(error)throw error;
 return data?.state?{...fresh(),...data.state}:fresh();
}
export async function saveCloud(userId:string,state:Study){
 if(!cloud)throw new Error('Supabase nije konfigurisan.');
 const {error}=await cloud.from('study_progress').upsert({user_id:userId,state,updated_at:new Date().toISOString()},{onConflict:'user_id'});
 if(error)throw error;
}
