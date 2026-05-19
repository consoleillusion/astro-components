{
  description = "Bun dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        bun = pkgs.bun;
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            bun
          ];
        };

apps.default = {
  type = "app";

  program = toString (pkgs.writeShellScript "run-dev" ''
    export PATH=${pkgs.lib.makeBinPath [
      bun
      pkgs.nodejs_22
    ]}:$PATH

    export BUN_INSTALL_CACHE_DIR="$TMPDIR/bun-cache"

    cd $(mktemp -d)

    cp -r ${self}/* .

    chmod -R +w .

    bun install
    exec bun run dev
  '');
};

      });
}
