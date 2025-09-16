# Commands Reference

This document contains all the useful commands for managing the WhatsApp Clone project.

## 🔫 Port Management

### Kill a Port
```bash
# Kill specific port (replace 3000 with your port number)
kill -9 $(lsof -ti:3000)

# Kill port 8080
kill -9 $(lsof -ti:8080)

# Kill any port
kill -9 $(lsof -ti:PORT_NUMBER)
```

### Find What's Running on a Port
```bash
# Check what's running on port 3000
lsof -i:3000

# Alternative method using netstat
netstat -tulpn | grep :3000

# List all processes using a specific port
lsof -ti:3000
```

### Kill by Process Name
```bash
# Kill all node processes
pkill -f node

# Kill React development server specifically
pkill -f "react-scripts start"

# Kill all npm processes
pkill -f npm
```

## 🚀 Development Server

### Start Development Server
```bash
# Navigate to client directory first
cd whatsapp-clone-client

# Start React development server
npm start

# Alternative with yarn
yarn start

# Start in background
npm start &
```

### Stop Development Server
```bash
# Ctrl+C in terminal where it's running, or:
pkill -f "react-scripts start"
```

## 📦 Package Management

### NPM Commands
```bash
# Install dependencies
npm install

# Install specific package
npm install package-name

# Install dev dependency
npm install -D package-name

# Update packages
npm update

# Check for outdated packages
npm outdated
```

### Yarn Commands
```bash
# Install dependencies
yarn install

# Add package
yarn add package-name

# Add dev dependency
yarn add -D package-name

# Update packages
yarn upgrade
```

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests without watch mode
npm test -- --watchAll=false

# Run specific test file
npm test App.test.tsx

# Run tests with coverage
npm test -- --coverage --watchAll=false
```

## 🏗️ Build & Production

### Build Commands
```bash
# Create production build
npm run build

# Create production build with yarn
yarn build

# Serve production build locally
npx serve -s build

# Alternative serve command
yarn global add serve
serve -s build
```

## 🎨 Code Formatting

### Prettier Commands
```bash
# Format all files
npm run format

# Format with yarn
yarn format

# Format specific file
npx prettier --write src/App.tsx

# Check formatting without changing files
npx prettier --check "src/**/*.{ts,tsx,js,jsx}"
```

## 📁 File & Directory Management

### Navigation
```bash
# Go to project root
cd /Users/matthewng/Desktop/FullStack-Whatsapp-Clone

# Go to client directory
cd whatsapp-clone-client

# Go to src directory
cd src

# Go back one directory
cd ..

# Go to home directory
cd ~
```

### File Operations
```bash
# List files and directories
ls -la

# Create directory
mkdir folder-name

# Create nested directories
mkdir -p parent/child/grandchild

# Remove file
rm filename

# Remove directory and contents
rm -rf directory-name

# Copy file
cp source destination

# Move/rename file
mv oldname newname
```

## 🔍 Search & Find

### Find Files
```bash
# Find files by name
find . -name "*.tsx"

# Find directories
find . -type d -name "components"

# Find files containing text
grep -r "ChatsListScreen" src/

# Find and replace text in files
sed -i '' 's/old-text/new-text/g' filename
```

## 🌐 Git Commands

### Basic Git Operations
```bash
# Check git status
git status

# Add all files
git add .

# Add specific file
git add filename

# Commit changes
git commit -m "Your commit message"

# Push to remote
git push origin main

# Pull from remote
git pull origin main

# Check git log
git log --oneline
```

### Branch Management
```bash
# Create new branch
git checkout -b feature-branch

# Switch to branch
git checkout main

# List branches
git branch

# Delete branch
git branch -d branch-name
```

## 🐛 Debugging & Troubleshooting

### Common Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check node and npm versions
node --version
npm --version

# Fix permissions (if needed)
sudo chown -R $(whoami) ~/.npm
```

### Process Management
```bash
# List all running processes
ps aux

# Find specific process
ps aux | grep node

# Kill process by PID
kill -9 PID

# Kill all node processes
pkill node
```

## 🔧 Environment Setup

### Node Version Management
```bash
# Check current node version
node --version

# Check npm version
npm --version

# Update npm to latest
npm install -g npm@latest
```

### Useful Aliases (add to ~/.bashrc or ~/.zshrc)
```bash
# Quick navigation
alias ll='ls -la'
alias ..='cd ..'
alias ...='cd ../..'

# Git shortcuts
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'
alias gp='git push origin main'

# npm shortcuts
alias ni='npm install'
alias ns='npm start'
alias nt='npm test'
alias nb='npm run build'
```

## 📱 React Development

### Component Generation
```bash
# Create functional component file
touch src/components/NewComponent.tsx
```

### Debugging React
```bash
# Start with debugging
npm start -- --verbose

# Check React version
npm list react

# React DevTools (browser extension recommended)
# Install React DevTools browser extension
```

## 🚨 Emergency Commands

### When Everything Breaks
```bash
# Nuclear option - complete reset
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Kill all node processes
sudo pkill -f node

# Reset git to last commit (dangerous!)
git reset --hard HEAD

# Restore deleted files from git
git checkout HEAD -- filename
```

## 📊 Monitoring & Performance

### System Monitoring
```bash
# Check disk usage
df -h

# Check memory usage
free -h

# Check running processes
top

# Check network connections
netstat -tulpn
```

---

## 📝 Quick Reference Card

**Most Used Commands:**
```bash
cd whatsapp-clone-client    # Navigate to project
npm start                   # Start dev server
npm test                    # Run tests
npm run build              # Build for production
kill -9 $(lsof -ti:3000)   # Kill port 3000
git add . && git commit -m "message" && git push origin main  # Git workflow
```

**Emergency Port Kill:**
```bash
kill -9 $(lsof -ti:3000)
```

**Complete Project Reset:**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```
