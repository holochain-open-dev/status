import { ZomeClient } from "@holochain-open-dev/utils";
import { AgentPubKey, AppClient, RoleName } from "@holochain/client";
import { SignalPayload } from "./types.js";

export interface PeerStatusEvents {
  ["signal"]: SignalPayload;
}
export class PeerStatusClient extends ZomeClient<SignalPayload> {
  constructor(
    public client: AppClient,
    public roleName: RoleName,
    public zomeName = "peer_status"
  ) {
    super(client, roleName, zomeName);
  }

  /**
   * Ping all given agents, expecting for their pong later
   */
  async ping(agentPubKeys: AgentPubKey[]): Promise<void> {
    return this.callZome("ping", agentPubKeys);
  }
}
