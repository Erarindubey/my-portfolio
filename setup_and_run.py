import subprocess
import sys
import os

def run_command(command, description):
    print(f"\n[{description}]")
    print(f"Running: {command}")
    try:
        # Run the command and stream output to the console
        process = subprocess.Popen(
            command,
            shell=True,
            stdout=sys.stdout,
            stderr=sys.stderr,
            text=True
        )
        process.wait()
        
        if process.returncode != 0:
            print(f"❌ Error: Command failed with exit code {process.returncode}")
            sys.exit(process.returncode)
        else:
            print(f"✅ Success: {description}")
    except Exception as e:
        print(f"❌ Exception occurred while running command: {e}")
        sys.exit(1)

def main():
    print("=" * 50)
    print("🚀 Setting up and running the Next.js Portfolio")
    print("=" * 50)

    # Make sure we are in the correct directory (where package.json is)
    if not os.path.exists("package.json"):
        print("❌ Error: package.json not found in the current directory.")
        print("Please run this script from the root of the project (d:\\Portfolio\\Portfolio-web\\arin-portfolio).")
        sys.exit(1)

    # 1. Enable corepack to use the correct pnpm version
    run_command("corepack enable", "Enabling Corepack for pnpm management")

    # 2. Approve builds and install dependencies
    run_command("pnpm approve-builds", "Approving any ignored package builds")
    run_command("pnpm install", "Installing project dependencies")

    # 3. Build the Next.js project
    run_command("pnpm run build", "Building the Next.js production bundle")

    # 4. Start the production server
    print("\n[Starting Production Server]")
    print("Running: pnpm run start")
    print("The app will be available at http://localhost:3000 (or http://localhost:3001 if configured)")
    print("Press Ctrl+C to stop.")
    
    try:
        subprocess.run("pnpm run start", shell=True, check=True)
    except KeyboardInterrupt:
        print("\nServer stopped by user.")
    except subprocess.CalledProcessError as e:
        print(f"\n❌ Server crashed with error code {e.returncode}")

if __name__ == "__main__":
    main()
