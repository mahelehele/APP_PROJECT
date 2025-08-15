# LinkUp — React Native (Expo) Starter

Production-minded starter with:
- **Auth Flow** (Firebase Auth email/password)
- **Bottom Tabs** (Matches / Groups / Events / Profile)
- **Dark Mode** (system + in-app toggle)
- **Zustand** state, Axios API layer, secure token storage
- **TypeScript** + sensible folder structure

## 1) Prereqs
- Node 18+
- Expo CLI: `npm i -g expo-cli` (optional, `npx expo` also works)

## 2) Install
```bash
npm install
# keep RN deps aligned with Expo SDK
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler
```

## 3) Firebase
Create a Firebase project → Web App → copy config.

Fill `src/services/firebaseConfig.ts`:
```ts
export default {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 4) Run
```bash
npm start
```

## 5) Notes
- Secure token storage uses `expo-secure-store` (mocked in dev).
- Replace the placeholder hero image in `WelcomeScreen` if you prefer.
- Add real API calls via `src/services/api.ts` when ready.
