import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Start server
const serverProcess = spawn('node', ['index.js'], {
  cwd: join(__dirname, 'Server'),
  stdio: 'inherit',
  shell: true
}); 

// Start client
const clientProcess = spawn('npm', ['run', 'dev'], {
  cwd: join(__dirname, 'Client'),
  stdio: 'inherit',
  shell: true
}); 

// Handle process termination
process.on('SIGINT', () => {
  serverProcess.kill();
  clientProcess.kill();
  process.exit();
});

serverProcess.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  clientProcess.kill();
  process.exit();
});

clientProcess.on('close', (code) => {
  console.log(`Client process exited with code ${code}`);
  serverProcess.kill();
  process.exit();
});
