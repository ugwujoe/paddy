import { FontAwesome } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Action } from "./Actions";
import { TodoItem } from "./Todo";
export type Todo = {
    name : string;
    isCompleted:boolean;
    description: string;
    category: string;
}
type Props = {
    todos: Todo[];
    
}

export const Todos = ({todos}: Props) => {
    return(
     <FlatList 
     showsVerticalScrollIndicator={false}
     style={{marginTop:20}}
     data={todos}
     renderItem={({ item }) => <TodoItem item={item} />}

     contentContainerStyle={{
        gap:20,
        flexGrow:1,
     }}
     ListEmptyComponent={() => (
        <Text style={{fontSize:30, textAlign:'center',marginTop:50}}> You have no upcoming tasks</Text>
     )

     }
     />
    );
};

