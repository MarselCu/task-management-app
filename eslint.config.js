import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Mengabaikan folder 'dist'
  { ignores: ['dist'] },
  {
    // Menentukan file yang akan diterapkan aturan
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Mengatur versi ECMAScript
      globals: globals.browser, // Menggunakan global dari lingkungan browser
      parserOptions: {
        ecmaVersion: 'latest', // Mengatur versi ECMAScript terbaru
        ecmaFeatures: { jsx: true }, // Mengizinkan penggunaan JSX
        sourceType: 'module', // Menggunakan modul ES
      },
    },
    settings: {
      react: {
        version: 'detect', // Otomatis mendeteksi versi React yang digunakan
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Menggunakan aturan standar yang direkomendasikan
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      // Aturan khusus
      'react/jsx-no-target-blank': 'off', // Mematikan peringatan untuk target="_blank"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Memungkinkan ekspor konstanta
      ],
      'no-unused-vars': 'warn', // Memberi peringatan untuk variabel yang tidak digunakan
      'no-console': 'warn', // Memberi peringatan untuk penggunaan console.log
    },
  },
];
