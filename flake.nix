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
            pkgs.nodejs_22
          ];
        };

        apps.default = {
          type = "app";

/*            cd ${self}
*/
          program = toString (pkgs.writeShellScript "run-dev" ''

            exec ${bun}/bin/bun run dev
          '');
        };
      });
}
