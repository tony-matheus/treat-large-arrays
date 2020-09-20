import axios from 'axios'

export const baseUrl = "https://random-persons.herokuapp.com";
export const API = axios.create({baseURL: baseUrl});


export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const usersFetch = (url) => axios.get(`${baseUrl}${url}`, corsHeaders)


