import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    ListItem,
    UnorderedList
  } from '@chakra-ui/react'
  import { useEffect, useState } from 'react';

  var XLSX = require("xlsx");

  


function LaunchModal() {

  const [colDefs, setColDefs] = useState([])
  const [data, setData] = useState([])

    const convertToJson = (headers,data) => {
        const rows = []
        data.forEach(row => {
            let rowData = {}
            row.forEach((element,index) => {
                rowData[headers[index]] = element
            })
            rows.push(rowData)
        });
        return rows;
    }

  const importExcel=(e)=>{
    const file=e.target.files[0]

    const reader = new FileReader()
    reader.onload=(event)=>{
        //parse data
        const bstr = event.target.result
        const workBook = XLSX.read(bstr,{type:"binary"})
    
        //get first sheet
        const workSheetName = workBook.SheetNames[0]
        const workSheet = workBook.Sheets[workSheetName]

        //convert to array
        const fileData = XLSX.utils.sheet_to_json(workSheet,{header:1})

        const headers = fileData[0]

        const heads = headers.map(head=>({title:head,field:head}))
        setColDefs(heads)

        //removing header
        fileData.splice(0,1)
    
        setData(convertToJson(headers,fileData))
        console.log(data)
        console.log(colDefs)
    }

    if(file){
        reader.readAsBinaryString(file)
    } else {
        setData([])
        setColDefs([])
    }
  }           

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showConfirmation, setShowConfirmation] = useState(false)
    
    const handleConfirmation = event => {
      setShowConfirmation(current => !current)
    }

    return (
        <>
        <Button className="" onClick={onOpen}>Launch</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
          <ModalOverlay />
          <ModalContent maxW="800px">
            <ModalHeader>Deploy Wellbeing Assessment</ModalHeader>
            <ModalCloseButton />
            <ModalBody fontSize='sm'>
            Launch
            </ModalBody>
            <ModalFooter className="space-x-4">
              <input type="file" onChange={importExcel} accept=".xls,.xlsx,.csv" className="py-10" />
              <Button className="text-black" mr={3} onClick={handleConfirmation}>
                Launch
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        { showConfirmation &&
        <Modal isOpen={isOpen} onClose={onClose && handleConfirmation} size='xl'>
          <ModalOverlay />
          <ModalContent maxW="800px">
            <ModalHeader>Deploy Wellbeing Assessment</ModalHeader>
            <ModalCloseButton />
            <ModalBody fontSize='sm'>
            Confirm
            </ModalBody>
            <ModalFooter className="space-x-4">
              <Button className="text-black" mr={3}>
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        }

      </>    
    )
}

export default LaunchModal;






