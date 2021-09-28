import { EvolvesTo } from "./evolvesto";

export interface EvolutionChain {
    chain:{
        evolves_to: EvolvesTo[];
        species:{
            name: string;
        }
    }
  }
  