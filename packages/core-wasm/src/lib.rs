use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello() -> String {
    "Hello from WASM".to_string()
}
