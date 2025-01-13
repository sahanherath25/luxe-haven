import supabase from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  console.log("MY DATA ",data)

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return data;


}

// We expect a newSetting object that looks like {setting: newValue}

export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
  return data;
}



// import { createClient } from '@supabase/supabase-js'
//
// const supabaseUrl = 'https://jomdxlnjubxdlumjcjii.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)