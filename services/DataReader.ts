import { promises as fs } from 'fs'
import * as path from 'path'
import * as XLSX from 'xlsx'


//JSON.stringigy => chuyen object ve json
//JSON.parse. -> chuyen json ve object 
export class DataReader {

    async readJsonFile<T>(filePath: string): Promise<T[]> {
        console.log(`DataReader: Dang doc file JSon tai ${filePath}`)

        try {
            const absolutePath = path.resolve(filePath)
            const fileContent = await fs.readFile(absolutePath, 'utf-8')
            const data: T[] = JSON.parse(fileContent)
            console.log(`DataReaer: Doc file JSON thanh cong, tim thay ${data.length} doi tuong`);
            return data;

        } catch (err) {
            console.error(`DataReader: Loi khi doc file Json tai :${filePath}, ${err}`)
            return []
        }

    }

    async readXlsxFile<T>(filePath: string, sheetName:string): Promise<T[]>{
         console.log(`DataReader: Dang doc file XLSX tai ${filePath}`)
        try {
            const absolutePath = path.resolve(filePath)
            const fileContent = await fs.readFile(absolutePath)
            const workbook = XLSX.read(fileContent, {type: 'buffer'})
            const sheet = workbook.Sheets[sheetName]
            if(!sheet){
                throw new Error(`Khong tim thay sheet voi ten ${sheetName}`)
            }
            const data = XLSX.utils.sheet_to_json<T>(sheet)
            console.log(`DataReaer: Doc file EXCEL thanh cong, tim thay ${data.length} doi tuong`);

            return data

        } catch (err) {
            console.error(`DataReader: Loi khi doc file EXCEL tai :${filePath}, ${err}`)
            return []
        }
    } 



}