import {Injectable} from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardFacadeService {
  getFormJsonSchema() {
    return of({
      "schema": {
        "title": "A list of tasks",
        "type": "object",
        "required": [
          "title"
        ],
        "properties": {
          "title": {
            "type": "string",
            "title": "Task list title"
          },
          "tasks": {
            "type": "array",
            "title": "Tasks",
            "items": {
              "type": "object",
              "required": [
                "title"
              ],
              "properties": {
                "title": {
                  "type": "string",
                  "title": "Title",
                  "description": "A sample title"
                },
                "details": {
                  "type": "string",
                  "title": "Task details",
                  "description": "Enter the task details"
                },
                "done": {
                  "type": "boolean",
                  "title": "Done?",
                  "default": false
                },
                "date": {
                  "type": "datepicker",
                  "title": "Select Date",
                  "default": new Date()
                },
                "numberEnum": {
                  "type": "number",
                  "title": "Number enum",
                  "enum": [1,2,3]
                },
                "stringEnum": {
                  "type": "string",
                  "title": "String enum",
                  "enum": ["John Doe", "Vasyl Stus", "Petro Kanistra"]
                }
              }
            }
          }
        }
      },
      "model": {
        "title": "Tasks",
        "tasks": [
          {
            "title": "My first task",
            "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "done": true,
            "date": new Date(),
            "numberEnum": 2,
            "stringEnum": "Petro Kanistra"
          }
        ]
      }
    })
  }
}
