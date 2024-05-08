import { AgentPubKey, AppClient } from "@holochain/client";
import { ZomeMock } from "@holochain-open-dev/utils";

export class PeerStatusZomeMock extends ZomeMock implements AppClient {
  async ping(_agents: AgentPubKey[]) {}
}
