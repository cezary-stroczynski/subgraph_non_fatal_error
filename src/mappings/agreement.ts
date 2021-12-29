import {
  Transfer as AgreementTransfer,
  Approval as AgreementApproval,
} from "../../generated/Agreement/Agreement";
import * as Schema from "../../generated/schema";

export function handleAgreementTransfer(event: AgreementTransfer): void {
  let agreementTransfer = new Schema.AgreementTransfer(
    `${event.transaction.hash.toHex()}-${event.logIndex.toString()}`
  );
  agreementTransfer.contract = event.address;
  agreementTransfer.signature = "Transfer(address,address,uint256)";
  agreementTransfer.timestamp = event.block.timestamp;
  agreementTransfer.blockHash = event.block.hash;
  agreementTransfer.blockNumber = event.block.number;
  agreementTransfer.transactionHash = event.transaction.hash;
  agreementTransfer.logIndex = event.logIndex;
  agreementTransfer.from = event.params.from;
  agreementTransfer.to = event.params.to;
  agreementTransfer.value = event.params.value;

  agreementTransfer.save();
}