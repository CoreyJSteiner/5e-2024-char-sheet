import './TabController.css'
import React, { useState, Children, isValidElement, type ReactElement } from 'react'

type TabProps = {
    label?: string
    children: React.ReactNode
}

const Tab: React.FC<TabProps> = ({ children }) => <>{children}</>

type TabControllerProps = {
    children: ReactElement<TabProps>[] | ReactElement<TabProps>
}

const TabController: React.FC<TabControllerProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0)

    const tabs = Children.toArray(children).filter(isValidElement) as ReactElement<TabProps>[]

    return (
        <div className="tab-container">
            <div className="tab-header">
                {tabs.map((child, index) => (
                    <button
                        key={index}
                        className={`tab-button ${index === activeTab ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {child.props.label || `Tab ${index + 1}`}
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {tabs[activeTab]}
            </div>
        </div>
    )
}

export { Tab, TabController }