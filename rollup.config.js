import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";

export default {
  input: "dev/index.html", // Giriş dosyası (projenin ana dosyası)
  output: {
    file: "dist/bundle.js", // Çıkış dosyası
    format: "es", // ES module formatında çıktıyı sağlar
    sourcemap: true,
  },
  plugins: [
    resolve(), // Node modüllerini çözümler
    commonjs(), // CommonJS modüllerini ES modüllerine dönüştürür
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    terser(), // Kodun minify edilmesini sağlar
  ],
};
