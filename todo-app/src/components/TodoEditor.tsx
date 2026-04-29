import { useRef, useState } from 'react';
import './TodoEditor.css';

interface TodoEditorProps {
    onCreate:(content: string) => void;
}

function TodoEditor({onCreate}: TodoEditorProps) {
    const [content, setContent] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    // 입력 content 값 저장 useState
    const onChangeContent = (e:React.ChangeEvent<HTMLInputElement>) => {

        setContent(e.target.value);
    }

    //onClick event가 void, void라서 형 맞춤을 위해 onSubmit 함수를 추가했다
    const onSubmit = () => {
        //할일이 입력되지 않았을 때 input에 focus
        if (!content) {
            inputRef.current?.focus();
            return;
        }

        onCreate(content);
        setContent('');
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing) return;
        
        if (e.key === 'Enter') {
            onSubmit();
        }
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            <div className="editor-wrapper">
                <input 
                    type="text" 
                    placeholder="새로운 Todo..." 
                    ref={inputRef}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    value={content}
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;