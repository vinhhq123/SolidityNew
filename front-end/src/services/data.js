import { SmartContractsService } from "./smartcontract.service"
import { ContextService } from "./context.serivce"
//import { LtlService } from "./ltlpro.serivce"
import { cpncontextService } from "./cpncontext.serivce"
import { ltltemplateService } from "./ltltemplate.serivce"

/* -------Vulnerabilities------ */
var listVulnerabilities = [
    { id: 1, name: "Integer Overfow/Underflow", description: "The [] Out of range is a property of vulnerability", },
    { id: 2, name: "Reentrancy", description: "Reentrancy is a property of vulnerability", },
    { id: 3, name: "Self-destruction", description: "Self-destruction is a property of vulnerability", },
    { id: 4, name: "Timestamp Dependence", description: "Timestamp Dependence is a property of vulnerability", },
    { id: 5, name: "Skip Empty String Literal", description: "Skip Empty String Literal is a property of vulnerability", },
    { id: 6, name: "Uninitialized Storage Variable", description: "Uninitialized Storage Variable is a property of vulnerability", },
    { id: 7, name: "Others", description: "Vulnerability 3 is a property of vulnerability", },
]

export function GetVulnerabilities() {
    return listVulnerabilities
}

/* -------Smart Contracts-------- */
// var listCommonSmartContracts = [
//   { id: 1, name: "Mathematics for Engineering", date_modified: 1607110465663, type: "common" },
//   { id: 2, name: "Property 2: Fairness", date_modified: 1608110465663, type: "common" },
//   { id: 3, name: "Course competencies", date_modified: 1609110465663, type: "common" },
//   { id: 4, name: "Build Web Apps with Vue JS 3 & Firebase", date_modified: 1608130465663, type: "common" },
//   { id: 5, name: "Advanced Techniques for Modeling and Verification", date_modified: 1608130765663, type: "common" },
//   { id: 6, name: "Mathematics for Engineering 2nd", date_modified: 1607110465663, type: "common" },
//   { id: 7, name: "Property 2: Fairness 2nd", date_modified: 1608110465663, type: "common" },
//   { id: 8, name: "Course competencies 2nd", date_modified: 1609110465663, type: "common" },
//   { id: 9, name: "Build Web Apps with Vue JS 3 & Firebase 2nd", date_modified: 1608130465663, type: "common" },
//   { id: 10, name: "Advanced Techniques for Modeling and Verification 2nd", date_modified: 1608130765663, type: "common" },
// ]

// var listPrivateSmartContracts = [
//   { id: 11, name: "Blind Action", date_modified: 1609110465663, type: "private" },
//   { id: 12, name: "Property 2: Fairness what's up", date_modified: 1608130765663, type: "private" },
//   { id: 13, name: "Modules CPNC", date_modified: 1607110465663, type: "private" },
//   { id: 14, name: "Blind Action 2nd", date_modified: 1609110465663, type: "private" },
//   { id: 15, name: "Property 2: Fairness what's up 2nd", date_modified: 1608130765663, type: "private" },
//   { id: 16, name: "Modules CPNC 2nd", date_modified: 1607110465663, type: "private" },
// ]

// var listPendingSmartContracts = [
//   { id: 17, name: "alabama ola", date_modified: 1607110465663, type: "pending" },
//   { id: 18, name: "perry the platypus", date_modified: 1608130465663, type: "pending" },
// ]

export async function GetCommonSmartContracts() {
    //return listCommonSmartContracts
    return await (await SmartContractsService.GetCommonSmartContracts()).data;
}

export async function GetPrivateSmartContracts() {
    //return listPrivateSmartContracts
    return await (await SmartContractsService.GetPrivateSmartContracts()).data;
}

export async function GetPendingSmartContracts() {
    //return listPendingSmartContracts
    return await (await SmartContractsService.GetPendingSmartContracts()).data;
}

var SmartContractCode = {
    1: "1st smart contract code",
    2: "2nd smart contract code",
    3: "3rd smart contract code",
    4: "4th smart contract code",
    5: "5th smart contract code",
    6: "6th smart contract code",
    7: "7th smart contract code",
    8: "8th smart contract code",
    9: "9th smart contract code",
    10: "10th smart contract code",
    11: "11th smart contract code",
    12: "12th smart contract code",
    13: "13th smart contract code",
    14: "14th smart contract code",
    15: "15th smart contract code",
    16: "16th smart contract code",
    17: "17th smart contract code",
    18: "18th smart contract code"
}

export function GetSmartContractCode(id) {

    if (id in SmartContractCode) {
        return SmartContractCode[id]
    } else {
        return ""
    }
}

export async function AddNewSmartContracts(sc_id, sc_name, options, content, createdDate, description) {
    await SmartContractsService.CreateSmartContracts(sc_id.words[0], sc_name, options, content, createdDate, description)
}
export async function GetSmartContractById(sc_id) {
    await SmartContractsService.GetSmartContractById(sc_id.words[0])
}

export async function UpdateSmartContractCode(sc_id, name_sc, code, description, option) {
    // if(sc_id in SmartContractCode){
    //   SmartContractCode[sc_id] = code
    // }
    console.log(code)
    await SmartContractsService.UpdateSmartContracts(sc_id, name_sc, code, description, option)
}
/* --------------------Delete SmartContract----------------- */
export function DeleteSmartContracts(sc_id, options) {
    console.log(options)
    SmartContractsService.DeleteSmartContracts(sc_id)
}
/* --------------------Accept Pending SmartContract----------------- */
export function AcceptPendingSmartContracts(sc_id, name_sc, code) {
    //console.log(sc_id)
    SmartContractsService.AcceptPendingSmartContracts(sc_id, name_sc, code)
        // var d = new Date,
        // dformat = [d.getFullYear(),
        // d.getMonth() + 1, d.getDate()].join('-') + ' ' +
        //   [d.getHours(),
        //   d.getMinutes(),
        //   d.getSeconds()].join(':');
        //SmartContractsService.CreateSmartContracts(sc_id,sc_name,"common")
}
/* --------------------Accept Pending SmartContract----------------- */
export function RefusePendingSmartContracts(sc_id, name_sc, code) {
    SmartContractsService.RefusePendingSmartContracts(sc_id, name_sc, code)
}

// function deleteSmartContractFromList(list, sc_id) {
//   for (let i = 0; i < list.length; i++) {
//     if (sc_id == list[i].id) {
//       list.splice(i, 1)
//       break
//     }
//   }
// }
// export function DeleteSmartContracts(sc_id, options) {
//   if (options == "private") {
//     deleteSmartContractFromList(listPrivateSmartContracts, sc_id)
//   }
//   if (options == "common") {
//     deleteSmartContractFromList(listCommonSmartContracts, sc_id)
//   }
//   if (options == "pending") {
//     deleteSmartContractFromList(listPendingSmartContracts, sc_id)
//   }
// }

/* --------------Get GlobalVariable,LocalVariable,Argument of SmartContract by ID-------------- */
export async function GetGloLocArgOfSmartContract(id) {
    const res = await SmartContractsService.getArguLocalGlobalVar(id);
    return res.data
}


/* ------Context------- */
export async function GetAllContext() {
    const response = await ContextService.GetAllContext()
    return response.data
}

export async function GetContextById(id_context) {
    const response = await ContextService.GetContextById(id_context)
    return response.data
}


/*---------CreateAndModiftyContext--------- */
export async function CreateContext(name, dateFormat, option, description, content) {
    return await ContextService.CreateContext(name, dateFormat, option, description, content)
}

/*---------DeleteContext-------- */
export async function DeleteContext(id_context) {
    return await ContextService.DeleteContext(id_context)
}

/*---------Update Context-------- */
export async function UpdateContext(id_context, ct_name, dateFormat, option, description, content) {
    console.log('id_context, ct_name, dateFormat, option, description, content', id_context, ct_name, dateFormat, option, description, content);
    return await ContextService.UpdateContext(id_context, ct_name, dateFormat, option, description, content)
}
/* ------LTL------- */

export async function GetAllltltemplates() {
    const response = await ltltemplateService.GetAllltltemplates()
    return response.data
}

export async function GetLtltemplteById(id_Ltl) {
    const response = await ltltemplateService.GetLtltemplteById(id_Ltl)
    return response.data
}

/*---------CreateAndModiftyLtl--------- */
export async function CreateLTLTemplate(name, fomular, description, date, formula_text) {
    console.log('fomular', formula_text);
    return await ltltemplateService.CreateLTLTemplate(name, fomular, description, date,formula_text);
}

/*---------DeleteLtl-------- */
export async function DeleteLtlTemplate(id_Ltl) {
    return await ltltemplateService.DeleteLtlTemplate(id_Ltl)
}

/*---------Update Ltl-------- */
export async function UpdateLtlTemplate(id_Ltl, ct_name, ct_description, fomular, date) {
    return await ltltemplateService.UpdateLtlTemplate(id_Ltl, ct_name, ct_description, fomular, date)
}
export async function GetAllcpncontext() {
    const response = await cpncontextService.GetAllcpncontext()
    return response.data
}
export async function SetDataForCallingTool(context, ltl) {
    const response = await cpncontextService.setDataForCallingTool(context, ltl)
    console.log('response1');
    return response.data
}