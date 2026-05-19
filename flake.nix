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

    CONFIG_FILE="$1"

    if [ -z "$CONFIG_FILE" ]; then
      echo "usage: nix run . -- <config-file>"
      exit 1
    fi

    WORKDIR=$(mktemp -d)

    cp -r ${self}/* "$WORKDIR"

    chmod -R +w "$WORKDIR"

    cp "$CONFIG_FILE" "$WORKDIR/config.json"

    cd "$WORKDIR"

    bun install

    exec bun run dev
  '');
};

      });
}
