import {
  Token,
  Types as Type,
  TokenList as TT
} from "../../labels";

import Node from "../../nodes";

import { Precedence } from "../../precedence";

import {
  getNameByLabel
} from "../../utils";

/**
 * @param  {Number} index Precedence
 * @return {Node}
 */
export function parseBinaryExpression(index) {

  let tmp = null;
  let ast = null;
  let node = null;

  let state = Precedence[index];

  ast = state ? this.parseBinaryExpression(index + 1) : this.parseAtom();

  while (this.acceptPrecedence(state)) {
    node = new Node.BinaryExpression();
    node.operator = TT[state.op];
    this.next();
    node.left = ast;
    tmp = state ? this.parseBinaryExpression(index + 1) : this.parseAtom();
    node.right = tmp;
    ast = node;
    node.isParenthised = this.peek(TT.RPAREN);
  };

  return (ast);

}