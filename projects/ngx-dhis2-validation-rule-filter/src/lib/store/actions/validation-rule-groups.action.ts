import { Action } from '@ngrx/store';

// Load validation rule groups

export const LOAD_VALIDATION_RULE_GROUPS = '[VALIDATION RULE GROUPS] Load Validation Rules Group';
export const LOAD_VALIDATION_RULE_GROUPS_FAIL = '[VALIDATION RULE GROUPS] Load Validation Rules Group Fail';
export const LOAD_VALIDATION_RULE_GROUPS_SUCCESS = '[VALIDATION RULE GROUPS] Load Validation Rules Group Success';

export class LoadValidationRuleGroups implements Action{
    readonly type = LOAD_VALIDATION_RULE_GROUPS;
}

export class LoadValidationRuleGroupsFail implements Action{
    readonly type = LOAD_VALIDATION_RULE_GROUPS_FAIL;
    constructor(public payload: any) {}
}

export class LoadValidationRuleGroupsSuccess implements Action{
    readonly type = LOAD_VALIDATION_RULE_GROUPS_SUCCESS;
    constructor(public payload: []) {}
}

// action types
export type ValidationRuleGroupsActions = LoadValidationRuleGroups | LoadValidationRuleGroupsFail | LoadValidationRuleGroupsSuccess;