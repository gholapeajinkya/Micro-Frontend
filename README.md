# Micro-Frontend Architecture with Module Federation

This repository demonstrates a micro-frontend architecture using **Webpack Module Federation**. It consists of two independently deployed React applications:

- **Remote App**: Exposes components/modules via Module Federation.
- **Host App**: Dynamically consumes the remote app at runtime.

Both apps are deployed on **GitHub Pages**.

---

## 🚀 Live Demos

- **Host App**: [View Host App](https://gholapeajinkya.github.io/Micro-Frontend/host-app/)
- **Remote App**: [Remote Entry File](https://gholapeajinkya.github.io/Micro-Frontend/remote-app/remoteEntry.js)

---

## 📁 Project Structure

---

## 🛠️ Setup Instructions

### 1. Install dependencies

```bash
# Host App
cd host-app
npm install

# Remote App
cd ../remote-app
npm install

# Remote App (on port 3002 or your config)
npm start

# Host App (on port 3001 or your config)
npm start
```
## Module Federation Overview
- The remote app exposes components via remoteEntry.js
- The host app loads the remote dynamically using the following config:

```javascript
remotes: {
  remoteApp: "remoteApp@https://gholapeajinkya.github.io/Micro-Frontend/remote-app/remoteEntry.js"
}
```
