{
  description = "Node & Zig";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = inputs@{ ... }:
    inputs.flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = inputs.nixpkgs.legacyPackages.${system};
      in {

        devShells = rec {
          default = pkgs.mkShell {
            buildInputs = with pkgs;[ bun yq zig ];
            shellHook = ''
              export PS1="\e[49;6;0m\e[38;5;110m\[\e[1m\]$\e[0m "
              clear
            '';
          };
        };
      }
    );
}

